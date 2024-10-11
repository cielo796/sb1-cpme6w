import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TransportationPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Transportation</h2>
      <Card>
        <CardHeader>
          <CardTitle>Transportation Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This page will manage transportation services for patients.</p>
        </CardContent>
      </Card>
    </div>
  );
}