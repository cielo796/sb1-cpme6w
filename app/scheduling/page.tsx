import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SchedulingPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Scheduling</h2>
      <Card>
        <CardHeader>
          <CardTitle>Schedules</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This page will handle scheduling for various activities and appointments.</p>
        </CardContent>
      </Card>
    </div>
  );
}