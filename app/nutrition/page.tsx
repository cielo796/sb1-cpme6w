import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NutritionPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Nutrition Management</h2>
      <Card>
        <CardHeader>
          <CardTitle>Nutrition Plans</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This page will handle nutrition management for patients.</p>
        </CardContent>
      </Card>
    </div>
  );
}