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
            <Table className="md:w-[50rem] bg-gradient-to-r from-rose-100 to-teal-100 rounded-md">
                <TableCaption>Quiz Leaderboard</TableCaption>
                    <TableHeader className="text-lg">
                    <TableRow className="border-dashed border-emerald-600">
                            <TableHead className="">Position</TableHead>
                            <TableHead className="">User name</TableHead>
                            <TableHead className="">Topic</TableHead>
                            <TableHead className="">Score</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {dataSorted?.map((e, id) => (
                        <TableRow className="border-dashed border-emerald-600">
                            <TableCell className="">{ id+1 }</TableCell>
                            <TableCell className="">{ e.username }</TableCell>
                            <TableCell className="">{ e.topic }</TableCell>
                            <TableCell className="">{ e.score }</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
            </Table>
        </div>
    )
}

export default TableComponent