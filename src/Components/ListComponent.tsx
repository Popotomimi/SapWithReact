import {
  AnalyticalTable,
  Card,
  CardHeader,
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Icon,
  ListItemCustom,
  ListItemStandard,
  ProgressIndicator,
  Text,
} from "@ui5/webcomponents-react";

import listIcon from "@ui5/webcomponents-icons/dist/list.js";
import ValueState from "@ui5/webcomponents-base/dist/types/ValueState.js";
import tableViewIcon from "@ui5/webcomponents-icons/dist/table-view.js";

import { useNavigate } from "react-router-dom";

const ListComponent = () => {
  const navigate = useNavigate();

  const handleProgressHeaderClick = () => {
    navigate("/detail");
  };

  const tableData = new Array(500).fill(null).map((_, index) => {
    return {
      name: `name${index}`,
      age: Math.floor(Math.random() * 100),
      friend: {
        name: `friend.Name${index}`,
        age: Math.floor(Math.random() * 100),
      },
    };
  });

  const tableColumns = [
    {
      Header: "Nome",
      accessor: "name",
    },
    {
      Header: "Idade",
      accessor: "age",
    },
    {
      Header: "Nome do Amigo",
      accessor: "friend.name",
    },
    {
      Header: "Idade do Amigo",
      accessor: "friend.age",
    },
  ];

  return (
    <div>
      <Card
        header={
          <CardHeader
            titleText="Progresso"
            subtitleText="Clique aqui para ver detalhes"
            avatar={<Icon name={listIcon} />}
            interactive
            onClick={handleProgressHeaderClick}
          />
        }
        style={{ width: "90%", margin: "25px auto", display: "block" }}>
        <ListItemStandard
          additionalText="finished"
          additionalTextState={ValueState.Positive}>
          Atividade 1
        </ListItemStandard>
        <ListItemStandard
          additionalText="failed"
          additionalTextState={ValueState.Negative}>
          Atividade 2
        </ListItemStandard>
        <ListItemCustom>
          <FlexBox
            direction={FlexBoxDirection.Column}
            fitContainer
            style={{ paddingBlock: "var(--sapContent_Space_S)" }}>
            <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
              <Text style={{ fontSize: "var(--sapFontLargeSize)" }}>
                Atividade 3
              </Text>
              <Text style={{ color: "var(--sapCriticalTextColor)" }}>
                Em progresso
              </Text>
            </FlexBox>
            <ProgressIndicator value={89} valueState={ValueState.Positive} />
          </FlexBox>
        </ListItemCustom>
        <ListItemCustom>
          <FlexBox
            direction={FlexBoxDirection.Column}
            fitContainer
            style={{ paddingBlock: "var(--sapContent_Space_S)" }}>
            <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
              <Text style={{ fontSize: "var(--sapFontLargeSize)" }}>
                Atividade 4
              </Text>
              <Text style={{ color: "var(--sapCriticalTextColor)" }}>
                Em progresso
              </Text>
            </FlexBox>
            <ProgressIndicator
              value={5}
              valueState={ValueState.Negative}
              style={{ marginBlockStart: "0.5rem" }}
            />
          </FlexBox>
        </ListItemCustom>
      </Card>
      <Card
        header={
          <CardHeader
            titleText="Tabela Analitica"
            avatar={<Icon name={tableViewIcon} />}
          />
        }
        style={{ width: "90%", margin: "25px auto", display: "block" }}>
        <AnalyticalTable data={tableData} columns={tableColumns} />
      </Card>
    </div>
  );
};

export default ListComponent;
