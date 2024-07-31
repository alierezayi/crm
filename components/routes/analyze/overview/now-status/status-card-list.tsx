import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function StatusCardItem({ value }: { title: string; value: number }) {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle className="">Free Margin Drawdown</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xl font-bold text-red-800">{value}%</p>
      </CardContent>
    </Card>
  );
}
export default function StatusCardList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      status-card-list
    </div>
  );
}
