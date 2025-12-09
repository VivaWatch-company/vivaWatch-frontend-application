import { UsersList } from '@/components/users/UsersList';

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Usuários</h2>
        <p className="mt-2 text-lg text-gray-700">Gerencie usuários do sistema</p>
      </div>

      <UsersList />
    </div>
  );
}