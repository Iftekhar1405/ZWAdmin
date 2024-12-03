import { DeleteIcon, EditIcon, EmailIcon } from "@chakra-ui/icons";
import { HStack, IconButton } from "@chakra-ui/react";
import axios from "axios";
import { LuPhoneCall } from "react-icons/lu";
import { MdConfirmationNumber } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { useErrorAlert, useSuccessAlert } from "../common/Alertfn";
export default function ActionButton({ row, editFunc, handleDelete, refetch }) {
  const SuccessAlert = useSuccessAlert();
  const ErrorAlert = useErrorAlert();
  const handleStatusChange = async (e, id, status) => {
    e.stopPropagation();
    try {
      const response = await axios.put(
        `http://localhost:5000/bookings/${id}/status`,
        {
          status,
        }
      );
      console.log(response);
      SuccessAlert(`Status successfully changed to "${status}"`);
      refetch();
    } catch (error) {
      console.error(`Error in changing status to "${status}"`, error);
      ErrorAlert(`Error in changing status to "${status}"`);
    }
  };

  return (
    <HStack
      spacing={2}
      sx={{
        "@media print": {
          display: "none",
        },
      }}
    >
      <a href={`tel:${row.mobile}`} onClick={(e) => e.stopPropagation()}>
        <IconButton
          icon={<LuPhoneCall />}
          onClick={(e) => e.stopPropagation()}
        />
      </a>
      <a href={`mailto:${row.email}`} onClick={(e) => e.stopPropagation()}>
        <IconButton icon={<EmailIcon />} onClick={(e) => e.stopPropagation()} />
      </a>
      {row.status === "pending" || row.status === "cancelled" ? (
        <IconButton
          icon={<MdConfirmationNumber />}
          onClick={(e) => handleStatusChange(e, row._id, "confirmed")}
          colorScheme="cyan"
          variant="outline"
        />
      ) : (
        <IconButton
          icon={<TiTick />}
          onClick={(e) => handleStatusChange(e, row._id, "completed")}
          colorScheme="green"
          isDisabled={row.status === "completed"}
        />
      )}
      <IconButton
        icon={<RxCross2 />}
        onClick={(e) => handleStatusChange(e, row._id, "cancelled")}
        colorScheme="red"
        isDisabled={row.status === "completed" || row.status === "cancelled"}
      />
      <IconButton
        icon={<EditIcon />}
        onClick={(e) => editFunc(e, row)}
        aria-label="Edit"
        size="sm"
      />
      <IconButton
        icon={<DeleteIcon />}
        onClick={(e) => handleDelete(e, row._id)}
        aria-label="Delete"
        size="sm"
        colorScheme="red"
      />
    </HStack>
  );
}
