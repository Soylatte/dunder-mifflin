
import Link from 'next/link';

export const Navigate = () => {
  return (
    <nav>
        <header>
            <Link to='/'>Trofix</Link>
        <Link to='/재료'>재료</Link>
        <Link to='/레시피'>레시피</Link>
        <Link to='/구독하기'>구독</Link>
        </header>
    </nav>
  )
}
