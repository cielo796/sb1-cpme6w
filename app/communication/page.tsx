import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CommunicationPage() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Communication</h2>
      <Card>
        <CardHeader>
          <CardTitle>Messages</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This page will manage internal communication and messaging.</p>
        </CardContent>
      </Card>
    </div>
  );
}