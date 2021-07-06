import { useContext, useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ErrorBoundary } from "../../components/ErrorBoundary";
import { ReferralWrapper } from "./styles";
import networkImage from "../../assets/referral/network.png";
import { web3Context } from "../../components/Context";
import ReferralHistory from "./ReferralHistory";

const Referral = () => {
	const [referralLink, setReferralLink] = useState("");
	const [isCopied, setCopied] = useState(false);
	const { generateReferralLink } = useContext(web3Context);

	useEffect(() => {
		if (isCopied) setTimeout(() => setCopied(false), 2000);
	});

	const generateReferral = async (e) => {
		e.preventDefault();

		if (referralLink !== "") return;
		const _sig = await generateReferralLink();
		setReferralLink(() => `${window.location.href}/create?referrerID=${_sig}`);
	};

	return (
		<ReferralWrapper className="grid">
			<div className="grid generate">
				<header className="grid">
					<h1>Referral Link</h1>
				</header>

				<div className="grid networkImage">
					<img src={networkImage} alt="Network" />
				</div>

				<div className="grid content">
					<p>
						Fraud really thrives in moments of great social change and
						transition. People lose their frame of reference for what can and
						can't be real.
					</p>
				</div>

				<form className="grid">
					<input
						value={referralLink}
						placeholder="http://127.0.0.1:3000/refferal/create?user=0xf610"
						disabled={true}
					/>

					<CopyToClipboard text={referralLink} onCopy={() => setCopied(true)}>
						<button type="button" onClick={generateReferral}>
							{referralLink === ""
								? "generate"
								: !isCopied
								? "copy your referral link"
								: "copied"}
						</button>
					</CopyToClipboard>
				</form>
			</div>

			<div className="container">
				<ReferralHistory />
			</div>
		</ReferralWrapper>
	);
};

export default ErrorBoundary(Referral);
