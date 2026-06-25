import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
 
  } from "@/components/ui/card";

  export default function LocationShipmentsChart({ chartData }) {
    return (
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Monthly Shipments</CardTitle>
        </CardHeader>
        <CardContent>
 
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="shipments"
                  stroke="#2563eb"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    )
  }