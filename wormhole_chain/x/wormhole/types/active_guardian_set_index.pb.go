// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: wormhole/active_guardian_set_index.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type ActiveGuardianSetIndex struct {
	Index uint32 `protobuf:"varint,1,opt,name=index,proto3" json:"index,omitempty"`
}

func (m *ActiveGuardianSetIndex) Reset()         { *m = ActiveGuardianSetIndex{} }
func (m *ActiveGuardianSetIndex) String() string { return proto.CompactTextString(m) }
func (*ActiveGuardianSetIndex) ProtoMessage()    {}
func (*ActiveGuardianSetIndex) Descriptor() ([]byte, []int) {
	return fileDescriptor_4a461fbc634ef414, []int{0}
}
func (m *ActiveGuardianSetIndex) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *ActiveGuardianSetIndex) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_ActiveGuardianSetIndex.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *ActiveGuardianSetIndex) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ActiveGuardianSetIndex.Merge(m, src)
}
func (m *ActiveGuardianSetIndex) XXX_Size() int {
	return m.Size()
}
func (m *ActiveGuardianSetIndex) XXX_DiscardUnknown() {
	xxx_messageInfo_ActiveGuardianSetIndex.DiscardUnknown(m)
}

var xxx_messageInfo_ActiveGuardianSetIndex proto.InternalMessageInfo

func (m *ActiveGuardianSetIndex) GetIndex() uint32 {
	if m != nil {
		return m.Index
	}
	return 0
}

func init() {
	proto.RegisterType((*ActiveGuardianSetIndex)(nil), "certusone.wormholechain.wormhole.ActiveGuardianSetIndex")
}

func init() {
	proto.RegisterFile("wormhole/active_guardian_set_index.proto", fileDescriptor_4a461fbc634ef414)
}

var fileDescriptor_4a461fbc634ef414 = []byte{
	// 182 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xd2, 0x28, 0xcf, 0x2f, 0xca,
	0xcd, 0xc8, 0xcf, 0x49, 0xd5, 0x4f, 0x4c, 0x2e, 0xc9, 0x2c, 0x4b, 0x8d, 0x4f, 0x2f, 0x4d, 0x2c,
	0x4a, 0xc9, 0x4c, 0xcc, 0x8b, 0x2f, 0x4e, 0x2d, 0x89, 0xcf, 0xcc, 0x4b, 0x49, 0xad, 0xd0, 0x2b,
	0x28, 0xca, 0x2f, 0xc9, 0x17, 0x52, 0x48, 0x4e, 0x2d, 0x2a, 0x29, 0x2d, 0xce, 0xcf, 0x4b, 0xd5,
	0x83, 0xe9, 0x49, 0xce, 0x48, 0xcc, 0xcc, 0x83, 0xf3, 0x94, 0xf4, 0xb8, 0xc4, 0x1c, 0xc1, 0x86,
	0xb8, 0x43, 0xcd, 0x08, 0x4e, 0x2d, 0xf1, 0x04, 0x99, 0x20, 0x24, 0xc2, 0xc5, 0x0a, 0x36, 0x4a,
	0x82, 0x51, 0x81, 0x51, 0x83, 0x37, 0x08, 0xc2, 0x71, 0xf2, 0x3b, 0xf1, 0x48, 0x8e, 0xf1, 0xc2,
	0x23, 0x39, 0xc6, 0x07, 0x8f, 0xe4, 0x18, 0x27, 0x3c, 0x96, 0x63, 0xb8, 0xf0, 0x58, 0x8e, 0xe1,
	0xc6, 0x63, 0x39, 0x86, 0x28, 0x93, 0xf4, 0xcc, 0x92, 0x8c, 0xd2, 0x24, 0xbd, 0xe4, 0xfc, 0x5c,
	0x7d, 0xb8, 0xb5, 0xfa, 0x30, 0x8b, 0x74, 0xc1, 0xf6, 0xea, 0x57, 0xc0, 0x05, 0xf4, 0x4b, 0x2a,
	0x0b, 0x52, 0x8b, 0x93, 0xd8, 0xc0, 0x0e, 0x35, 0x06, 0x04, 0x00, 0x00, 0xff, 0xff, 0x60, 0xd6,
	0x2d, 0xaa, 0xd4, 0x00, 0x00, 0x00,
}

func (m *ActiveGuardianSetIndex) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *ActiveGuardianSetIndex) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *ActiveGuardianSetIndex) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Index != 0 {
		i = encodeVarintActiveGuardianSetIndex(dAtA, i, uint64(m.Index))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintActiveGuardianSetIndex(dAtA []byte, offset int, v uint64) int {
	offset -= sovActiveGuardianSetIndex(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *ActiveGuardianSetIndex) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Index != 0 {
		n += 1 + sovActiveGuardianSetIndex(uint64(m.Index))
	}
	return n
}

func sovActiveGuardianSetIndex(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozActiveGuardianSetIndex(x uint64) (n int) {
	return sovActiveGuardianSetIndex(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *ActiveGuardianSetIndex) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowActiveGuardianSetIndex
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: ActiveGuardianSetIndex: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: ActiveGuardianSetIndex: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Index", wireType)
			}
			m.Index = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowActiveGuardianSetIndex
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Index |= uint32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipActiveGuardianSetIndex(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthActiveGuardianSetIndex
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipActiveGuardianSetIndex(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowActiveGuardianSetIndex
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowActiveGuardianSetIndex
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowActiveGuardianSetIndex
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthActiveGuardianSetIndex
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupActiveGuardianSetIndex
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthActiveGuardianSetIndex
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthActiveGuardianSetIndex        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowActiveGuardianSetIndex          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupActiveGuardianSetIndex = fmt.Errorf("proto: unexpected end of group")
)
