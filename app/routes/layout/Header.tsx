import { Outlet } from 'react-router'

const Header = () => {
    return (
        <div>
            <h2>Soy el Header</h2>
            <Outlet />
        </div>
    )
}

export default Header