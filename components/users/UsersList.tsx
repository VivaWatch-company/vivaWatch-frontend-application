// components/users/UsersList.tsx
import { mockUsers } from '@/data/mockUsers';
import { UserTable } from './UserTable';  // ← precisa ter o ./ e o nome exato
import { Button } from '@/components/ui/Button';
import { Plus } from '@/components/ui/Icons';

export function UsersList() {
  return (
    <div className="rounded-lg border bg-white shadow-sm">
      <div className="flex items-center justify-between border-b p-6">
        <h3 className="text-lg font-semibold">List of Users</h3>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New User
        </Button>
      </div>

      <UserTable users={mockUsers} />
    </div>
  );
}