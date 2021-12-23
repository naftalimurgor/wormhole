package types

import (
	"fmt"
	"github.com/ethereum/go-ethereum/common"
)

func (gs GuardianSet) KeysAsAddresses() (addresses []common.Address) {
	for _, key := range gs.Keys {
		address := common.Address{}
		copy(address[:], key)
		addresses = append(addresses, address)
	}

	return
}

func (gs GuardianSet) ValidateBasic() error {
	for i, key := range gs.Keys {
		if len(key) != 20 {
			return fmt.Errorf("key [%d]: len %d != 20", i, len(key))
		}
	}

	return nil
}
