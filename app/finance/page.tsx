import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FinancePage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Financial Management</h2>
      <Card>
        <CardHeader>
          <CardTitle>Finances</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This page will handle financial management and reporting.</p>
        </CardContent>
      </Card>
    </div>
  );
}