
// bootstrap components
import Stack from "react-bootstrap/Stack";

export default function InfoCluster(props){
    const sentences = props.set?.map((sentence) => (
        <div className="info-cluster-sentence">{sentence}</div>
    ));

    return(
        <Stack gap={4} className="info-stack">
            <div className="picture-placeholder cluster-icon"></div>
            {sentences}
        </Stack>
    );
}
