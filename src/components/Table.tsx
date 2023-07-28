import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Array<T> = T[]

interface Props {
    data: Array<any>
}

const TableComponent: React.FC<Props> = ({ data }) => {
    
    const dataSorted = data?.sort((a, b) => b.score - a.score)

    return (
        <div>
            <Table className="md:w-[50rem] bg-black rounded-md">
                <TableCaption>Quiz Leaderboard</TableCaption>
                    <TableHeader className="text-lg">
                    <TableRow>
                            <TableHead className="text-cyan-400">Position</TableHead>
                            <TableHead className="text-cyan-400">User name</TableHead>
                            <TableHead className="text-cyan-400">Topic</TableHead>
                            <TableHead className="text-cyan-400">Score</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {dataSorted?.map((e, id) => (
                        <TableRow>
                            <TableCell className="text-cyan-400">{ id+1 }</TableCell>
                            <TableCell className="text-cyan-400">{ e.userId.username }</TableCell>
                            <TableCell className="text-cyan-400">{ e.topic }</TableCell>
                            <TableCell className="text-cyan-400">{ e.score }</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
            </Table>
        </div>
    )
}

export default TableComponent