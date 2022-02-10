package keeper

import (
	"encoding/binary"

	"github.com/certusone/wormhole-chain/x/wormhole/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) UpdateGuardianSet(ctx sdk.Context, newGuardianSet types.GuardianSet) error {
	config, ok := k.GetConfig(ctx)
	if !ok {
		return types.ErrNoConfig
	}

	oldSet, exists := k.GetGuardianSet(ctx, k.GetGuardianSetCount(ctx)-1)
	if !exists {
		return types.ErrGuardianSetNotFound
	}
	if oldSet.Index+1 != newGuardianSet.Index {
		return types.ErrGuardianSetNotSequential
	}

	// Create new set
	k.AppendGuardianSet(ctx, types.GuardianSet{
		Keys:           newGuardianSet.Keys,
		ExpirationTime: 0,
	})

	// Expire old set
	oldSet.ExpirationTime = uint64(ctx.BlockTime().Unix()) + config.GuardianSetExpiration
	k.SetGuardianSet(ctx, oldSet)

	// Emit event
	err := ctx.EventManager().EmitTypedEvent(&types.EventGuardianSetUpdate{
		OldIndex: oldSet.Index,
		NewIndex: oldSet.Index + 1,
	})
	if err != nil {
		return err
	}

	return err
}

// GetGuardianSetCount get the total number of guardianSet
func (k Keeper) GetGuardianSetCount(ctx sdk.Context) uint32 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.GuardianSetCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint32(bz)
}

// SetGuardianSetCount set the total number of guardianSet
func (k Keeper) SetGuardianSetCount(ctx sdk.Context, count uint32) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.GuardianSetCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint32(bz, count)
	store.Set(byteKey, bz)
}

// AppendGuardianSet appends a guardianSet in the store with a new id and update the count
func (k Keeper) AppendGuardianSet(
	ctx sdk.Context,
	guardianSet types.GuardianSet,
) uint32 {
	// Create the guardianSet
	count := k.GetGuardianSetCount(ctx)

	// Set the ID of the appended value
	guardianSet.Index = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GuardianSetKey))
	appendedValue := k.cdc.MustMarshal(&guardianSet)
	store.Set(GetGuardianSetIDBytes(guardianSet.Index), appendedValue)

	// Update guardianSet count
	k.SetGuardianSetCount(ctx, count+1)

	return count
}

// SetGuardianSet set a specific guardianSet in the store
func (k Keeper) SetGuardianSet(ctx sdk.Context, guardianSet types.GuardianSet) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GuardianSetKey))
	b := k.cdc.MustMarshal(&guardianSet)
	store.Set(GetGuardianSetIDBytes(guardianSet.Index), b)
}

// GetGuardianSet returns a guardianSet from its id
func (k Keeper) GetGuardianSet(ctx sdk.Context, id uint32) (val types.GuardianSet, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GuardianSetKey))
	b := store.Get(GetGuardianSetIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveGuardianSet removes a guardianSet from the store
func (k Keeper) RemoveGuardianSet(ctx sdk.Context, id uint32) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GuardianSetKey))
	store.Delete(GetGuardianSetIDBytes(id))
}

// GetAllGuardianSet returns all guardianSet
func (k Keeper) GetAllGuardianSet(ctx sdk.Context) (list []types.GuardianSet) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GuardianSetKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.GuardianSet
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetGuardianSetIDBytes returns the byte representation of the ID
func GetGuardianSetIDBytes(id uint32) []byte {
	bz := make([]byte, 4)
	binary.BigEndian.PutUint32(bz, id)
	return bz
}

// GetGuardianSetIDFromBytes returns ID in uint64 format from a byte array
func GetGuardianSetIDFromBytes(bz []byte) uint32 {
	return binary.BigEndian.Uint32(bz)
}