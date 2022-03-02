package keeper_test

import (
	"testing"

	keepertest "github.com/certusone/wormhole-chain/testutil/keeper"
	"github.com/certusone/wormhole-chain/x/wormhole/keeper"
	"github.com/certusone/wormhole-chain/x/wormhole/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNGuardianSet(t *testing.T, keeper *keeper.Keeper, ctx sdk.Context, n int) []types.GuardianSet {
	items := make([]types.GuardianSet, n)
	for i := range items {
		items[i].Index = uint32(i)
		_, err := keeper.AppendGuardianSet(ctx, items[i])
		if err != nil {
			t.Fatal(err)
		}
	}
	return items
}

func TestGuardianSetGet(t *testing.T) {
	keeper, ctx := keepertest.WormholeKeeper(t)
	items := createNGuardianSet(t, keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetGuardianSet(ctx, item.Index)
		require.True(t, found)
		require.Equal(t, item, got)
	}
}

func TestGuardianSetRemove(t *testing.T) {
	keeper, ctx := keepertest.WormholeKeeper(t)
	items := createNGuardianSet(t, keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveGuardianSet(ctx, item.Index)
		_, found := keeper.GetGuardianSet(ctx, item.Index)
		require.False(t, found)
	}
}

func TestGuardianSetGetAll(t *testing.T) {
	keeper, ctx := keepertest.WormholeKeeper(t)
	items := createNGuardianSet(t, keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllGuardianSet(ctx))
}

func TestGuardianSetCount(t *testing.T) {
	keeper, ctx := keepertest.WormholeKeeper(t)
	items := createNGuardianSet(t, keeper, ctx, 10)
	count := uint32(len(items))
	require.Equal(t, count, keeper.GetGuardianSetCount(ctx))
}
