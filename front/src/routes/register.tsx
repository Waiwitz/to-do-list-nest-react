import { createFileRoute } from '@tanstack/react-router'
import { Register } from '../features/auth/register'

export const Route = createFileRoute('/register')({
  component: RegisterPage,
})

function RegisterPage() {
  return <Register />
}
