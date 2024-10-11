import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RehabilitationPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Rehabilitation</h2>
      <Card>
        <CardHeader>
          <CardTitle>Rehabilitation Programs</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This page will manage rehabilitation programs for patients.</p>
        </CardContent>
      </Card>
    </div>
  );
}