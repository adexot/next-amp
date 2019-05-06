import { withAmp } from 'next/amp';

const Index = () => (
    <div>
        <p>Hello Next.js</p>
    </div>
)

export default withAmp(Index, { hybrid: true })