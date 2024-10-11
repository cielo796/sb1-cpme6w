import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CarePlanningPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Care Planning</h2>
      <Card>
        <CardHeader>
          <CardTitle>Care Plans</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This page will manage care planning for patients.</p>
        </CardContent>
      </Card>
    </div>
  );
}