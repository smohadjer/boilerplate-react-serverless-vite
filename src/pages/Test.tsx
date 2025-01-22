import { useParams } from 'react-router';

export default function Test() {
    const { id } = useParams();

    return (
        <p>page with id: {id}</p>
    )
}
