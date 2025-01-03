var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-7HDCFG6L.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "Real Machines - Next-Gen AI Automation" },
  { name: "description", content: "Transform your business with cutting-edge AI automation solutions from Real Machines." }
];
function Index() {
  let [ref, inView] = useInView({
    triggerOnce: !0,
    threshold: 0.1
  });
  return /* @__PURE__ */ jsxDEV3("main", { className: "bg-gray-900 text-gray-100", children: [
    /* @__PURE__ */ jsxDEV3("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV3("div", { className: "absolute inset-0 bg-gradient-to-b from-indigo-600/20 to-blue-600/20" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "container relative py-32", children: /* @__PURE__ */ jsxDEV3(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "max-w-4xl mx-auto text-center",
          children: [
            /* @__PURE__ */ jsxDEV3("h1", { className: "text-6xl font-bold mb-8 leading-tight text-white", children: [
              "The Future of ",
              /* @__PURE__ */ jsxDEV3("span", { className: "gradient-text", children: "AI Automation" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 31,
                columnNumber: 29
              }, this),
              " Is Here"
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 30,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV3("p", { className: "text-xl mb-12 text-gray-200", children: "Revolutionize your business operations with intelligent automation powered by cutting-edge AI technology." }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 33,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV3("div", { className: "space-x-4", children: [
              /* @__PURE__ */ jsxDEV3("button", { className: "btn", children: "Get Started Free" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 37,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV3("button", { className: "btn bg-white/20 hover:bg-white/30 from-transparent to-transparent border border-white/20", children: "Watch Demo" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 38,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 36,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 24,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("section", { ref, className: "py-32 relative", children: /* @__PURE__ */ jsxDEV3("div", { className: "container", children: [
      /* @__PURE__ */ jsxDEV3(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: inView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.8 },
          className: "text-center mb-20",
          children: [
            /* @__PURE__ */ jsxDEV3("h2", { className: "text-5xl font-bold mb-6 text-white", children: [
              "Why Choose ",
              /* @__PURE__ */ jsxDEV3("span", { className: "gradient-text", children: "Real Machines" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 56,
                columnNumber: 26
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 55,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV3("p", { className: "text-xl text-gray-200", children: "Experience the next generation of business automation" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 58,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 49,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3("div", { className: "grid md:grid-cols-3 gap-8", children: features.map((feature, index) => /* @__PURE__ */ jsxDEV3(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: inView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.8, delay: index * 0.2 },
          className: "glass-card p-8 hover:scale-105 transition-transform duration-300",
          children: [
            /* @__PURE__ */ jsxDEV3("div", { className: "w-12 h-12 mb-6 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center", children: feature.icon }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 72,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV3("h3", { className: "text-2xl font-semibold mb-4 text-white", children: feature.title }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 75,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV3("p", { className: "text-gray-200", children: feature.description }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 76,
              columnNumber: 17
            }, this)
          ]
        },
        feature.title,
        !0,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 65,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("section", { className: "py-32 relative bg-gradient-to-b from-gray-900 to-gray-800", children: /* @__PURE__ */ jsxDEV3("div", { className: "container", children: [
      /* @__PURE__ */ jsxDEV3("h2", { className: "text-5xl font-bold text-center mb-20 text-white", children: [
        "Trusted by ",
        /* @__PURE__ */ jsxDEV3("span", { className: "gradient-text", children: "Industry Leaders" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 87,
          columnNumber: 24
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3("div", { className: "grid md:grid-cols-2 gap-8", children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsxDEV3(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: inView ? { opacity: 1, scale: 1 } : {},
          transition: { duration: 0.5, delay: index * 0.2 },
          className: "glass-card p-8",
          children: [
            /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center mb-6", children: [
              /* @__PURE__ */ jsxDEV3("div", { className: "w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 99,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV3("div", { className: "ml-4", children: [
                /* @__PURE__ */ jsxDEV3("p", { className: "font-semibold text-lg text-white", children: testimonial.name }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 101,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV3("p", { className: "text-gray-200", children: testimonial.role }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 102,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 100,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 98,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV3("p", { className: "text-gray-200 text-lg leading-relaxed", children: testimonial.content }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 105,
              columnNumber: 17
            }, this)
          ]
        },
        testimonial.name,
        !0,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 91,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("section", { className: "py-32 relative", children: /* @__PURE__ */ jsxDEV3("div", { className: "container max-w-3xl", children: /* @__PURE__ */ jsxDEV3(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: inView ? { opacity: 1, y: 0 } : {},
        transition: { duration: 0.8 },
        className: "glass-card p-12",
        children: [
          /* @__PURE__ */ jsxDEV3("h2", { className: "text-4xl font-bold text-center mb-12 text-white", children: [
            "Start Your ",
            /* @__PURE__ */ jsxDEV3("span", { className: "gradient-text", children: "AI Journey" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 122,
              columnNumber: 26
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 121,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV3("form", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxDEV3("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxDEV3("div", { children: [
                /* @__PURE__ */ jsxDEV3("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-200 mb-2", children: "Name" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 127,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV3(
                  "input",
                  {
                    type: "text",
                    id: "name",
                    className: "w-full bg-gray-800 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    placeholder: "John Doe"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 130,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 126,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV3("div", { children: [
                /* @__PURE__ */ jsxDEV3("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-200 mb-2", children: "Email" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 138,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV3(
                  "input",
                  {
                    type: "email",
                    id: "email",
                    className: "w-full bg-gray-800 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    placeholder: "john@example.com"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 141,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 137,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 125,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV3("div", { children: [
              /* @__PURE__ */ jsxDEV3("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-200 mb-2", children: "Message" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 150,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV3(
                "textarea",
                {
                  id: "message",
                  rows: 4,
                  className: "w-full bg-gray-800 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                  placeholder: "Tell us about your project..."
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 153,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 149,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV3("button", { type: "submit", className: "btn w-full", children: "Send Message" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 160,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 124,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 115,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 114,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
var features = [
  {
    title: "Smart Automation",
    description: "Deploy intelligent workflows that learn and adapt to your business needs in real-time.",
    icon: /* @__PURE__ */ jsxDEV3("svg", { className: "w-6 h-6 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 175,
      columnNumber: 101
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 175,
      columnNumber: 11
    }, this)
  },
  {
    title: "Real-time Analytics",
    description: "Get instant insights with advanced AI-powered analytics and predictive modeling.",
    icon: /* @__PURE__ */ jsxDEV3("svg", { className: "w-6 h-6 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 180,
      columnNumber: 101
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 180,
      columnNumber: 11
    }, this)
  },
  {
    title: "Enterprise Security",
    description: "Military-grade encryption and security protocols protect your sensitive data.",
    icon: /* @__PURE__ */ jsxDEV3("svg", { className: "w-6 h-6 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxDEV3("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 185,
      columnNumber: 101
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 185,
      columnNumber: 11
    }, this)
  }
], testimonials = [
  {
    content: "Real Machines has revolutionized our operations. We've seen a 40% increase in efficiency and significant cost reduction within months.",
    name: "Sarah Johnson",
    role: "CTO, TechCorp"
  },
  {
    content: "The AI solutions provided by Real Machines have given us a competitive edge we didn't think was possible. Simply outstanding.",
    name: "Michael Chen",
    role: "Operations Director, InnovateCo"
  }
];

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-RN4MPWD5.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-JN55BUO4.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-HROVJQA4.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DFUNLA7W.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-HEUWP25P.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "9475096b", hmr: { runtime: "/build/_shared/chunk-HROVJQA4.js", timestamp: 1735896117603 }, url: "/build/manifest-9475096B.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
