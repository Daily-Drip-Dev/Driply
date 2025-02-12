# 1단계: 빌드 단계 (이름: builder)
FROM node:20 AS builder

WORKDIR /app

# 의존성 설치
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Github Action에서 환경변수 주입
ARG VITE_SUPABASE_URL
ARG VITE_SUPABASE_KEY
ARG VITE_KAKAO_JS_KEY

# 환경 변수를 컨테이너 내부에서 사용할 수 있도록 설정
ENV VITE_SUPABASE_URL=${VITE_SUPABASE_URL}
ENV VITE_SUPABASE_KEY=${VITE_SUPABASE_KEY}
ENV VITE_KAKAO_JS_KEY=${VITE_KAKAO_JS_KEY}
ENV NODE_ENV=production

# 애플리케이션 소스 복사 및 빌드
COPY . .
RUN npm run build

# 2단계: 런타임 단계
FROM node:20-slim

WORKDIR /app

# 빌드된 결과물만 복사 (불필요한 파일 제거)
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./

EXPOSE 8080

CMD ["npm", "run", "start"]
