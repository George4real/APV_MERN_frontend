import {Link} from 'react-router-dom'
export const AdminNav = () => {
  return (
    <nav className='gap-3'>
        <Link 
            to="/admin/perfil"
            className='font-bold uppercase text-gray-500'
        > Perfil</Link>
        <Link 
            to="/admin/cambiar-password"
            className='font-bold uppercase text-gray-500'
        > Cambiar Password</Link>
    </nav>
  )
}
