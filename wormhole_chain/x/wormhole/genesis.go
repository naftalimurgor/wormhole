package wormhole

import (
	"github.com/certusone/wormhole-chain/x/wormhole/keeper"
	"github.com/certusone/wormhole-chain/x/wormhole/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the guardianSet
	for _, elem := range genState.GuardianSetList {
		k.AppendGuardianSet(ctx, elem)
	}

	// Set if defined
	if genState.Config != nil {
		k.SetConfig(ctx, *genState.Config)
	}
	// Set all the replayProtection
	for _, elem := range genState.ReplayProtectionList {
		k.SetReplayProtection(ctx, elem)
	}
	// Set all the sequenceCounter
	for _, elem := range genState.SequenceCounterList {
		k.SetSequenceCounter(ctx, elem)
	}
	// Set if defined
	if genState.ActiveGuardianSetIndex != nil {
		k.SetActiveGuardianSetIndex(ctx, *genState.ActiveGuardianSetIndex)
	}
	// this line is used by starport scaffolding # genesis/module/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	genesis.GuardianSetList = k.GetAllGuardianSet(ctx)
	// Get all config
	config, found := k.GetConfig(ctx)
	if found {
		genesis.Config = &config
	}
	genesis.ReplayProtectionList = k.GetAllReplayProtection(ctx)
	genesis.SequenceCounterList = k.GetAllSequenceCounter(ctx)
	// Get all activeGuardianSetIndex
	activeGuardianSetIndex, found := k.GetActiveGuardianSetIndex(ctx)
	if found {
		genesis.ActiveGuardianSetIndex = &activeGuardianSetIndex
	}
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
