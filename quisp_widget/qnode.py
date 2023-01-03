from typing import TYPE_CHECKING, List
from .channel import ClassicalChannel, QuantumChannel

if TYPE_CHECKING:
    from .network import Network


class QNode:
    network: "Network"
    name: str
    channels: List["ClassicalChannel"]
    addr: int
    is_initiator: bool

    def __init__(
        self, network: "Network", name: str = "", is_initiator: bool = False
    ) -> None:
        self.network = network
        self.name = name
        self.network.add_qnode(self)
        self.is_initiator = is_initiator

    def connect(self, qnode: "QNode") -> None:
        self.network.add_classical_channel(ClassicalChannel(self, qnode))
        self.network.add_quantum_channel(QuantumChannel(self, qnode))
