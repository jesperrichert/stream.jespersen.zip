FROM alpine:3.23.0 AS base
WORKDIR /app


FROM oven/bun:slim AS buildfrontend
WORKDIR /Jespersen.Stream.Frontend

COPY Jespersen.Stream.Frontend/ .

RUN bun install
RUN bun run build

FROM golang:tip-alpine3.23 AS buildbackend
WORKDIR /Jespersen.Stream.Backend

COPY Jespersen.Stream.Backend/ .

RUN go build cmd/main.go

FROM base AS final

ENV FRONTEND_BUILD=/app/frontend

COPY --from=buildbackend /Jespersen.Stream/go.Jespersen.Stream .
COPY --from=buildfrontend /Jespersen.Stream/build/ ./frontend

CMD ["./go.Jespersen.Stream"]
