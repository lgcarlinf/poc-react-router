
import type { Route } from './+types';

/* export async function loader({ params }: Route.LoaderArgs) {
    console.log('loader team number', params);
    return { id: params.id }
} */

const number = (/* { loaderData }: Route.ComponentProps */) => {
    console.log('number team',);
    return (
        <h1>number team </h1>
    )
}

export default number