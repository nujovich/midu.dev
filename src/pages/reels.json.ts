export const GET: APIRoute = async ({ request }) => {
  request.headers.set("access-control-allow-origin", "*");
  return {
    body: JSON.stringify([
      {
        url: "https://instagram.falc2-1.fna.fbcdn.net/v/t51.2885-15/395468123_868076778030485_843802157789182455_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42NDB4MTEzNi5zZHIifQ&_nc_ht=instagram.falc2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=jYKQrB0qlfoAX_UPCLX&edm=ACHbZRIBAAAA&ccb=7-5&oh=00_AfDk6PURcdcTomOWBmmQ-8rTxjGFSNQ3_Xs1K23TquntSg&oe=6544FEB5&_nc_sid=c024bc",
      },
      {
        url: "https://instagram.falc2-2.fna.fbcdn.net/v/t51.2885-15/395077624_1098658238211388_7775854928507858255_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42NDB4MTEzNi5zZHIifQ&_nc_ht=instagram.falc2-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=KaYs8Gr2yeEAX82R_t2&edm=ACHbZRIBAAAA&ccb=7-5&oh=00_AfBXG58P-QCSZF1OVyC_OH0xjQxxulkIRl7xhMMYbIfIpg&oe=6543C709&_nc_sid=c024bc",
      },
    ]),
  };
};
