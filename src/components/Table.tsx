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

const TableComponent:React.FC<Props> = ({data}) => {
    return (
        <div>
            <Table className="md:w-[50rem]">
                <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader className="text-lg">
                    <TableRow>
                            <TableHead className="text-cyan-400">Invoice</TableHead>
                            <TableHead className="text-cyan-400">Status</TableHead>
                            <TableHead className="text-cyan-400">Method</TableHead>
                            <TableHead className="text-cyan-400 text-right">Amount</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                    </TableBody>
            </Table>
        </div>
    )
}

export default TableComponent