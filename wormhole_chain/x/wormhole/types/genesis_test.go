package types_test

import (
	"testing"

	"github.com/certusone/wormhole-chain/x/wormhole/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{
				GuardianSetList: []types.GuardianSet{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				GuardianSetCount: 2,
				Config:           &types.Config{},
				ReplayProtectionList: []types.ReplayProtection{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				SequenceCounterList: []types.SequenceCounter{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated guardianSet",
			genState: &types.GenesisState{
				GuardianSetList: []types.GuardianSet{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid guardianSet count",
			genState: &types.GenesisState{
				GuardianSetList: []types.GuardianSet{
					{
						Id: 1,
					},
				},
				GuardianSetCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated replayProtection",
			genState: &types.GenesisState{
				ReplayProtectionList: []types.ReplayProtection{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated sequenceCounter",
			genState: &types.GenesisState{
				SequenceCounterList: []types.SequenceCounter{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}