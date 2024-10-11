import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function UsersPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">User Management</h2>
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is where the user management functionality will be implemented.</p>
          <p>Features to be added:</p>
          <ul className="list-disc list-inside mt-2">
            <li>User listing</li>
            <li>User creation</li>
            <li>User editing</li>
            <li>User deletion</li>
            <li>Role management</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}