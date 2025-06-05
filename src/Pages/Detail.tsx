import { useState } from "react";
import {
  Card,
  CardHeader,
  ProgressIndicator,
  FlexBox,
  FlexBoxDirection,
  Text,
  Button,
  Input,
} from "@ui5/webcomponents-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Detail = () => {
  const [activity, setActivity] = useState({
    id: 1,
    name: "Atividade 1",
    status: "Em Progresso",
    progressHistory: [
      { date: "2025-06-01", progress: 20 },
      { date: "2025-06-03", progress: 50 },
      { date: "2025-06-05", progress: 89 },
    ],
  });

  const [newProgress, setNewProgress] = useState("");

  const handleAddProgress = () => {
    const parsedProgress = Number(newProgress);
    if (
      !isNaN(parsedProgress) &&
      parsedProgress >= 0 &&
      parsedProgress <= 100
    ) {
      setActivity((prevActivity) => ({
        ...prevActivity,
        progressHistory: [
          ...prevActivity.progressHistory,
          {
            date: new Date().toISOString().split("T")[0],
            progress: parsedProgress,
          },
        ],
      }));
      setNewProgress("");
    }
  };

  return (
    <Card
      header={<CardHeader titleText="Detalhes da Atividade" />}
      style={{ width: "90%", margin: "25px auto", display: "block" }}>
      <FlexBox direction={FlexBoxDirection.Column} style={{ padding: "20px" }}>
        <Text style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          {activity.name}
        </Text>
        <Text>Status: {activity.status}</Text>

        <ProgressIndicator
          value={activity.progressHistory.slice(-1)[0].progress}
          displayValue={`${activity.progressHistory.slice(-1)[0].progress}%`}
        />

        <Text style={{ marginTop: "15px", fontWeight: "bold" }}>
          Historico do Progresso
        </Text>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={activity.progressHistory}>
            <XAxis dataKey="date" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="progress"
              stroke="#007aff"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>

        <FlexBox
          direction={FlexBoxDirection.Row}
          style={{ marginTop: "15px", gap: "10px" }}>
          <Input
            value={newProgress}
            placeholder="Adicionar Progresso (0-100)"
            onInput={(e) => setNewProgress(e.target.value)}
          />
          <Button onClick={handleAddProgress}>Adicionar Progresso</Button>
        </FlexBox>
      </FlexBox>
    </Card>
  );
};

export default Detail;
