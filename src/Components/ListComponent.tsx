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
      Header: "Name",
      accessor: "name", // String-based value accessors!
    },
    {
      Header: "Age",
      accessor: "age",
    },
    {
      Header: "Friend Name",
      accessor: "friend.name",
    },
    {
      Header: "Friend Age",
      accessor: "friend.age",
    },
  ];

  return (
    <div>
      <Card
        header={
          <CardHeader
            titleText="Progress"
            subtitleText="List"
            avatar={<Icon name={listIcon} />}
            interactive
            onClick={handleProgressHeaderClick}
          />
        }
        style={{ width: "90%", margin: "25px auto", display: "block" }}>
        <ListItemStandard
          additionalText="finished"
          additionalTextState={ValueState.Positive}>
          Activity 1
        </ListItemStandard>
        <ListItemStandard
          additionalText="failed"
          additionalTextState={ValueState.Negative}>
          Activity 2
        </ListItemStandard>
        <ListItemCustom>
          <FlexBox
            direction={FlexBoxDirection.Column}
            fitContainer
            style={{ paddingBlock: "var(--sapContent_Space_S)" }}>
            <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween}>
              <Text style={{ fontSize: "var(--sapFontLargeSize)" }}>
                Activity 3
              </Text>
              <Text style={{ color: "var(--sapCriticalTextColor)" }}>
                in progress
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
                Activity 4
              </Text>
              <Text style={{ color: "var(--sapCriticalTextColor)" }}>
                in progress
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
            titleText="AnalyticalTable"
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
