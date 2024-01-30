import { memo } from "react";
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

function TokenResultsTableBuilder({ headers, body, bodykeys }) {

  return (
    <TableContainer border="2px" borderTop="none">
      <Table borderRadius={"lg"} boxShadow={"lg"} variant={"striped"}>
        <Thead>
          {headers.map((t, h) => (
            <Th key={h}>{t}</Th>
          ))}
        </Thead>
        <Tbody
          p={2}
          rowGap=".33rem"
          columnGap={".33rem"}
        >
          {body.map((map, i) => (
            <Tr key={i}>{bodykeys.map((key, j) =>
              <Td key={j}>{map[key]}</Td>
            )}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
export default memo(TokenResultsTableBuilder)
