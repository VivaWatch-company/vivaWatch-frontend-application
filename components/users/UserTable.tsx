'use client';

import { User } from '@/types';
import { getRoleColor, getRoleLabel } from '@/lib/roleUtils';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Edit, Trash2 } from '@/components/ui/Icons';

interface UserTableProps {
  users: User[];
}

export function UserTable({ users }: UserTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b text-left text-sm font-medium text-gray-600">
            <th className="px-6 py-4">Nome</th>
            <th className="px-6 py-4">E-mail</th>
            <th className="px-6 py-4">Tipo</th>
            <th className="px-6 py-4 text-center">Nº Dispositivos</th>
            <th className="px-6 py-4">Criado em</th>
            <th className="px-6 py-4 text-right">Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
              <td className="px-6 py-4 text-gray-600">{user.email}</td>
              <td className="px-6 py-4">
                <Badge variant={getRoleColor(user.role)}>
                  {getRoleLabel(user.role)}
                </Badge>
              </td>
              <td className="px-6 py-4 text-center text-gray-700">
                {user.deviceCount}
              </td>
              <td className="px-6 py-4 text-gray-600">{user.createdAt}</td>
              <td className="px-6 py-4">
                <div className="flex justify-end space-x-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}