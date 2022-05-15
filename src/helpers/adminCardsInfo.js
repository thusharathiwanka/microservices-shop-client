import { MdStyle, MdFeedback } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const adminCardInfo = [
	{ name: "Total Products", icon: <MdStyle />, endpoint: "/products/total" },
	{ name: "Total Customers", icon: <FaUsers />, endpoint: "/users/total" },
	{
		name: "Total Feedbacks",
		icon: <MdFeedback />,
		endpoint: "/feedbacks/total",
	},
];

export { adminCardInfo };
