import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdmissionPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Admission Management</h2>
      <Card>
        <CardHeader>
          <CardTitle>Admissions</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This page will handle admission management functionality.</p>
        </CardContent>
      </Card>
    </div>
  );
}