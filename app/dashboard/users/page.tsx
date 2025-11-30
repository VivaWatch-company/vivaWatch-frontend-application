// app/dashboard/users/page.tsx
import { UsersList } from '@/components/users/UsersList';

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Users</h2>
          <p className="text-muted-foreground mt-1">Manage system users</p>
        </div>
      </div>

      <UsersList />
    </div>
  );
}