import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export default function TokenResultsTableBuilder({ headers, body, bodykeys }) {
  console.log(body, bodykeys, headers)
  console.log(body[0][bodykeys[0]])

  return <Table>
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
      {body.map((tc, i) => (
        <Tr key={i}>
          {bodykeys.map((k, j) =>
            <Td key={j}>{tc[k]}</Td>
          )}
        </Tr>
      ))}
    </Tbody>
  </Table>

}
