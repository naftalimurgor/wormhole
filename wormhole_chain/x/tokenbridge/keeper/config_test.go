package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "github.com/certusone/wormhole-chain/testutil/keeper"
	"github.com/certusone/wormhole-chain/x/tokenbridge/keeper"
	"github.com/certusone/wormhole-chain/x/tokenbridge/types"
)

func createTestConfig(keeper *keeper.Keeper, ctx sdk.Context) types.Config {
	item := types.Config{}
	keeper.SetConfig(ctx, item)
	return item
}

func TestConfigGet(t *testing.T) {
	keeper, ctx := keepertest.TokenbridgeKeeper(t)
	item := createTestConfig(keeper, ctx)
	rst, found := keeper.GetConfig(ctx)
	require.True(t, found)
	require.Equal(t, item, rst)
}
func TestConfigRemove(t *testing.T) {
	keeper, ctx := keepertest.TokenbridgeKeeper(t)
	createTestConfig(keeper, ctx)
	keeper.RemoveConfig(ctx)
	_, found := keeper.GetConfig(ctx)
	require.False(t, found)
}
