export function gatherCandidates({ iceServers, onCandidate, onDone, onStateChange }) {
  const pc = new RTCPeerConnection({ iceServers });
  pc.createDataChannel("probe");

  pc.onicegatheringstatechange = () => onStateChange?.(pc.iceGatheringState);
  pc.onicecandidate = (e) => {
    if (e.candidate) onCandidate(e.candidate);
    else onDone();
  };

  pc.createOffer()
    .then((offer) => pc.setLocalDescription(offer))
    .catch((error) => {
      console.error("Failed to start ICE candidate gathering:", error);
      pc.close();
    });

  return () => pc.close();
}
