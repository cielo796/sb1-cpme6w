import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NurseCallPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Nurse Call System</h2>
      <Card>
        <CardHeader>
          <CardTitle>Nurse Calls</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This page will manage and display nurse call information.</p>
        </CardContent>
      </Card>
    </div>
  );
}