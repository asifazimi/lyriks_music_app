FROM node:16.17.0
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN             if [ -f yarn.lock ]; then yarn --frozen-lockfile;             elif [ -f package-lock.json ]; then npm ci;             elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile;             else echo "Lockfile not found." && exit 1;             fi
WORKDIR /usr/app
COPY . .
WORKDIR /usr/app/dist/src
EXPOSE 3000
CMD node main.js