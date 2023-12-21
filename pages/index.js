import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="title">
      <p style={{ fontSize: "40px", fontWeight: "bold" }}>Projects</p>
      <div className="row">
        <Link href="/cashtransaction" style={{ textDecoration: "none" }}>
          <div className="left">
            <Image src="/cash.png" alt="Snow" width={150} height={150} />
            <p
              style={{
                paddingTop: "10px",
                fontWeight: "bold",
                fontSize: "20px",
                // color: "white",
              }}
            >
              Cash Transaction
            </p>
          </div>
        </Link>
        <Link href="/pfil" style={{ textDecoration: "none" }}>
          <div className="right">
            <Image src="/phonix.jpg" alt="Snow" width={250} height={150} />
            <p
              style={{
                paddingTop: "10px",
                fontWeight: "bold",
                fontSize: "20px",
                // color: "white",
              }}
            >
              PFIL
            </p>
          </div>
        </Link>
        <Link href="/vault" style={{ textDecoration: "none" }}>
          <div className="right">
            <Image src="/new-vault.png" alt="Snow" width={150} height={150} />
            <p
              style={{
                paddingTop: "10px",
                fontWeight: "bold",
                fontSize: "20px",
                // color: "white",
              }}
            >
              Vault Status
            </p>
          </div>
        </Link>
      </div>
    </div>
    // <div className="full">
    //   <iframe
    //     className="frame"
    //     src="https://app.powerbi.com/reportEmbed?reportId=152a650f-ae45-4366-8ae5-4b3b767c1498&autoAuth=true&ctid=147d207c-cfb1-4dda-bebc-d96c8cb48eed"
    //   ></iframe>
    // </div>
  )
}
