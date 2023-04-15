# 기반 이미지 선택
FROM node:18-alpine as build

# 작업 디렉토리 설정
WORKDIR /app

# 앱 의존성 설치
COPY package.json package-lock.json ./
RUN npm install

# 앱 소스 추가
COPY . .

# 앱 빌드
RUN npm run build

# Nginx 기반의 웹 서버 이미지를 선택
FROM nginx:stable-alpine

# Nginx 설정 파일 복사
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 빌드한 앱을 Nginx 서버에 배포
COPY --from=build /app/build /usr/share/nginx/html

# 도커 컨테이너 실행 시 웹 서버 자동 시작
CMD ["nginx", "-g", "daemon off;"]
