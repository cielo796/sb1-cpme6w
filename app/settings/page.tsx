import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      <Card>
        <CardHeader>
          <CardTitle>System Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This page will allow users to configure system settings.</p>
        </CardContent>
      </Card>
    </div>
  );
}