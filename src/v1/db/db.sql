--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1 (Ubuntu 16.1-1.pgdg22.04+1)
-- Dumped by pg_dump version 16.1 (Ubuntu 16.1-1.pgdg22.04+1)

-- Started on 2024-01-20 16:32:07 CST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 222 (class 1259 OID 16428)
-- Name: address; Type: TABLE; Schema: public; Owner: neto
--

CREATE TABLE public.address (
    id integer NOT NULL,
    user_id integer NOT NULL,
    country character varying(30) NOT NULL,
    state character varying(100),
    street character varying(255),
    zip_code character varying(15) NOT NULL,
    created_at timestamp without time zone NOT NULL
);


ALTER TABLE public.address OWNER TO neto;

--
-- TOC entry 221 (class 1259 OID 16427)
-- Name: address_id_seq; Type: SEQUENCE; Schema: public; Owner: neto
--

CREATE SEQUENCE public.address_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.address_id_seq OWNER TO neto;

--
-- TOC entry 3494 (class 0 OID 0)
-- Dependencies: 221
-- Name: address_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neto
--

ALTER SEQUENCE public.address_id_seq OWNED BY public.address.id;


--
-- TOC entry 226 (class 1259 OID 16447)
-- Name: console; Type: TABLE; Schema: public; Owner: neto
--

CREATE TABLE public.console (
    id integer NOT NULL,
    console_dict_id integer NOT NULL,
    user_id integer NOT NULL,
    is_used boolean NOT NULL,
    is_sold boolean NOT NULL,
    price double precision NOT NULL,
    image character varying(255) NOT NULL,
    description text,
    created_at timestamp without time zone NOT NULL
);


ALTER TABLE public.console OWNER TO neto;

--
-- TOC entry 224 (class 1259 OID 16440)
-- Name: console_dictionary; Type: TABLE; Schema: public; Owner: neto
--

CREATE TABLE public.console_dictionary (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    type character varying(100) NOT NULL
);


ALTER TABLE public.console_dictionary OWNER TO neto;

--
-- TOC entry 223 (class 1259 OID 16439)
-- Name: console_dictionary_id_seq; Type: SEQUENCE; Schema: public; Owner: neto
--

CREATE SEQUENCE public.console_dictionary_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.console_dictionary_id_seq OWNER TO neto;

--
-- TOC entry 3495 (class 0 OID 0)
-- Dependencies: 223
-- Name: console_dictionary_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neto
--

ALTER SEQUENCE public.console_dictionary_id_seq OWNED BY public.console_dictionary.id;


--
-- TOC entry 225 (class 1259 OID 16446)
-- Name: console_id_seq; Type: SEQUENCE; Schema: public; Owner: neto
--

CREATE SEQUENCE public.console_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.console_id_seq OWNER TO neto;

--
-- TOC entry 3496 (class 0 OID 0)
-- Dependencies: 225
-- Name: console_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neto
--

ALTER SEQUENCE public.console_id_seq OWNED BY public.console.id;


--
-- TOC entry 232 (class 1259 OID 16504)
-- Name: gender; Type: TABLE; Schema: public; Owner: neto
--

CREATE TABLE public.gender (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.gender OWNER TO neto;

--
-- TOC entry 231 (class 1259 OID 16503)
-- Name: gender_id_seq; Type: SEQUENCE; Schema: public; Owner: neto
--

CREATE SEQUENCE public.gender_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.gender_id_seq OWNER TO neto;

--
-- TOC entry 3497 (class 0 OID 0)
-- Dependencies: 231
-- Name: gender_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neto
--

ALTER SEQUENCE public.gender_id_seq OWNED BY public.gender.id;


--
-- TOC entry 230 (class 1259 OID 16485)
-- Name: periferic; Type: TABLE; Schema: public; Owner: neto
--

CREATE TABLE public.periferic (
    id integer NOT NULL,
    user_id integer NOT NULL,
    console_dict_id integer NOT NULL,
    name character varying(255) NOT NULL,
    is_used boolean NOT NULL,
    is_sold boolean NOT NULL,
    price double precision NOT NULL,
    image character varying NOT NULL,
    description text,
    created_at timestamp without time zone NOT NULL
);


ALTER TABLE public.periferic OWNER TO neto;

--
-- TOC entry 229 (class 1259 OID 16484)
-- Name: periferic_id_seq; Type: SEQUENCE; Schema: public; Owner: neto
--

CREATE SEQUENCE public.periferic_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.periferic_id_seq OWNER TO neto;

--
-- TOC entry 3498 (class 0 OID 0)
-- Dependencies: 229
-- Name: periferic_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neto
--

ALTER SEQUENCE public.periferic_id_seq OWNED BY public.periferic.id;


--
-- TOC entry 220 (class 1259 OID 16414)
-- Name: profile; Type: TABLE; Schema: public; Owner: neto
--

CREATE TABLE public.profile (
    id integer NOT NULL,
    user_id integer NOT NULL,
    name character varying(255) NOT NULL,
    lastname character varying(255) NOT NULL,
    date_birth date NOT NULL,
    profile_pic character varying(255),
    contact_email character varying(255),
    contact_number character varying(50),
    created_at timestamp without time zone NOT NULL
);


ALTER TABLE public.profile OWNER TO neto;

--
-- TOC entry 219 (class 1259 OID 16413)
-- Name: profile_id_seq; Type: SEQUENCE; Schema: public; Owner: neto
--

CREATE SEQUENCE public.profile_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.profile_id_seq OWNER TO neto;

--
-- TOC entry 3499 (class 0 OID 0)
-- Dependencies: 219
-- Name: profile_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neto
--

ALTER SEQUENCE public.profile_id_seq OWNED BY public.profile.id;


--
-- TOC entry 216 (class 1259 OID 16393)
-- Name: user; Type: TABLE; Schema: public; Owner: neto
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    user_role_id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(50) NOT NULL,
    created_at timestamp without time zone NOT NULL
);


ALTER TABLE public."user" OWNER TO neto;

--
-- TOC entry 215 (class 1259 OID 16392)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: neto
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_id_seq OWNER TO neto;

--
-- TOC entry 3500 (class 0 OID 0)
-- Dependencies: 215
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neto
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- TOC entry 218 (class 1259 OID 16402)
-- Name: user_role; Type: TABLE; Schema: public; Owner: neto
--

CREATE TABLE public.user_role (
    id integer NOT NULL,
    role character varying(50) NOT NULL
);


ALTER TABLE public.user_role OWNER TO neto;

--
-- TOC entry 217 (class 1259 OID 16401)
-- Name: user_role_id_seq; Type: SEQUENCE; Schema: public; Owner: neto
--

CREATE SEQUENCE public.user_role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_role_id_seq OWNER TO neto;

--
-- TOC entry 3501 (class 0 OID 0)
-- Dependencies: 217
-- Name: user_role_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neto
--

ALTER SEQUENCE public.user_role_id_seq OWNED BY public.user_role.id;


--
-- TOC entry 228 (class 1259 OID 16466)
-- Name: videogame; Type: TABLE; Schema: public; Owner: neto
--

CREATE TABLE public.videogame (
    id integer NOT NULL,
    console_dict_id integer NOT NULL,
    user_id integer NOT NULL,
    name character varying(255) NOT NULL,
    is_used boolean NOT NULL,
    is_sold boolean NOT NULL,
    image character varying(255) NOT NULL,
    description text,
    price double precision NOT NULL,
    created_at timestamp without time zone NOT NULL
);


ALTER TABLE public.videogame OWNER TO neto;

--
-- TOC entry 234 (class 1259 OID 16513)
-- Name: videogame_gender; Type: TABLE; Schema: public; Owner: neto
--

CREATE TABLE public.videogame_gender (
    id integer NOT NULL,
    videogame_id integer NOT NULL,
    gender_id integer NOT NULL
);


ALTER TABLE public.videogame_gender OWNER TO neto;

--
-- TOC entry 233 (class 1259 OID 16512)
-- Name: videogame_gender_id_seq; Type: SEQUENCE; Schema: public; Owner: neto
--

CREATE SEQUENCE public.videogame_gender_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.videogame_gender_id_seq OWNER TO neto;

--
-- TOC entry 3502 (class 0 OID 0)
-- Dependencies: 233
-- Name: videogame_gender_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neto
--

ALTER SEQUENCE public.videogame_gender_id_seq OWNED BY public.videogame_gender.id;


--
-- TOC entry 227 (class 1259 OID 16465)
-- Name: videogame_id_seq; Type: SEQUENCE; Schema: public; Owner: neto
--

CREATE SEQUENCE public.videogame_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.videogame_id_seq OWNER TO neto;

--
-- TOC entry 3503 (class 0 OID 0)
-- Dependencies: 227
-- Name: videogame_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: neto
--

ALTER SEQUENCE public.videogame_id_seq OWNED BY public.videogame.id;


--
-- TOC entry 3308 (class 2604 OID 16431)
-- Name: address id; Type: DEFAULT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.address ALTER COLUMN id SET DEFAULT nextval('public.address_id_seq'::regclass);


--
-- TOC entry 3310 (class 2604 OID 16450)
-- Name: console id; Type: DEFAULT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.console ALTER COLUMN id SET DEFAULT nextval('public.console_id_seq'::regclass);


--
-- TOC entry 3309 (class 2604 OID 16443)
-- Name: console_dictionary id; Type: DEFAULT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.console_dictionary ALTER COLUMN id SET DEFAULT nextval('public.console_dictionary_id_seq'::regclass);


--
-- TOC entry 3313 (class 2604 OID 16507)
-- Name: gender id; Type: DEFAULT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.gender ALTER COLUMN id SET DEFAULT nextval('public.gender_id_seq'::regclass);


--
-- TOC entry 3312 (class 2604 OID 16488)
-- Name: periferic id; Type: DEFAULT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.periferic ALTER COLUMN id SET DEFAULT nextval('public.periferic_id_seq'::regclass);


--
-- TOC entry 3307 (class 2604 OID 16417)
-- Name: profile id; Type: DEFAULT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.profile ALTER COLUMN id SET DEFAULT nextval('public.profile_id_seq'::regclass);


--
-- TOC entry 3305 (class 2604 OID 16396)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 3306 (class 2604 OID 16405)
-- Name: user_role id; Type: DEFAULT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.user_role ALTER COLUMN id SET DEFAULT nextval('public.user_role_id_seq'::regclass);


--
-- TOC entry 3311 (class 2604 OID 16469)
-- Name: videogame id; Type: DEFAULT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.videogame ALTER COLUMN id SET DEFAULT nextval('public.videogame_id_seq'::regclass);


--
-- TOC entry 3314 (class 2604 OID 16516)
-- Name: videogame_gender id; Type: DEFAULT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.videogame_gender ALTER COLUMN id SET DEFAULT nextval('public.videogame_gender_id_seq'::regclass);


--
-- TOC entry 3322 (class 2606 OID 16433)
-- Name: address pk_address; Type: CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT pk_address PRIMARY KEY (id);


--
-- TOC entry 3326 (class 2606 OID 16454)
-- Name: console pk_console; Type: CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.console
    ADD CONSTRAINT pk_console PRIMARY KEY (id);


--
-- TOC entry 3324 (class 2606 OID 16445)
-- Name: console_dictionary pk_console_dict; Type: CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.console_dictionary
    ADD CONSTRAINT pk_console_dict PRIMARY KEY (id);


--
-- TOC entry 3332 (class 2606 OID 16511)
-- Name: gender pk_gender; Type: CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.gender
    ADD CONSTRAINT pk_gender PRIMARY KEY (id);


--
-- TOC entry 3330 (class 2606 OID 16492)
-- Name: periferic pk_periferic; Type: CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.periferic
    ADD CONSTRAINT pk_periferic PRIMARY KEY (id);


--
-- TOC entry 3320 (class 2606 OID 16421)
-- Name: profile pk_profile; Type: CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.profile
    ADD CONSTRAINT pk_profile PRIMARY KEY (id);


--
-- TOC entry 3316 (class 2606 OID 16400)
-- Name: user pk_user; Type: CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT pk_user PRIMARY KEY (id);


--
-- TOC entry 3318 (class 2606 OID 16407)
-- Name: user_role pk_user_role; Type: CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.user_role
    ADD CONSTRAINT pk_user_role PRIMARY KEY (id);


--
-- TOC entry 3328 (class 2606 OID 16473)
-- Name: videogame pk_videogame; Type: CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.videogame
    ADD CONSTRAINT pk_videogame PRIMARY KEY (id);


--
-- TOC entry 3334 (class 2606 OID 16518)
-- Name: videogame_gender pk_videogame_gender; Type: CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.videogame_gender
    ADD CONSTRAINT pk_videogame_gender PRIMARY KEY (id);


--
-- TOC entry 3337 (class 2606 OID 16434)
-- Name: address fk_address_belongs_user; Type: FK CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT fk_address_belongs_user FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- TOC entry 3338 (class 2606 OID 16455)
-- Name: console fk_console_belongs_user; Type: FK CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.console
    ADD CONSTRAINT fk_console_belongs_user FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- TOC entry 3339 (class 2606 OID 16460)
-- Name: console fk_console_has_name_dict; Type: FK CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.console
    ADD CONSTRAINT fk_console_has_name_dict FOREIGN KEY (console_dict_id) REFERENCES public.console_dictionary(id);


--
-- TOC entry 3344 (class 2606 OID 16524)
-- Name: videogame_gender fk_gender_belongs_videogame; Type: FK CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.videogame_gender
    ADD CONSTRAINT fk_gender_belongs_videogame FOREIGN KEY (gender_id) REFERENCES public.gender(id);


--
-- TOC entry 3342 (class 2606 OID 16493)
-- Name: periferic fk_periferic_belongs_user; Type: FK CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.periferic
    ADD CONSTRAINT fk_periferic_belongs_user FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- TOC entry 3343 (class 2606 OID 16498)
-- Name: periferic fk_periferic_name_console_dict; Type: FK CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.periferic
    ADD CONSTRAINT fk_periferic_name_console_dict FOREIGN KEY (console_dict_id) REFERENCES public.console_dictionary(id);


--
-- TOC entry 3336 (class 2606 OID 16422)
-- Name: profile fk_profile_belongs_user; Type: FK CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.profile
    ADD CONSTRAINT fk_profile_belongs_user FOREIGN KEY (user_id) REFERENCES public."user"(id) NOT VALID;


--
-- TOC entry 3335 (class 2606 OID 16408)
-- Name: user fk_user_has_role; Type: FK CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT fk_user_has_role FOREIGN KEY (user_role_id) REFERENCES public.user_role(id);


--
-- TOC entry 3340 (class 2606 OID 16479)
-- Name: videogame fk_videogame_belongs_console_dict; Type: FK CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.videogame
    ADD CONSTRAINT fk_videogame_belongs_console_dict FOREIGN KEY (console_dict_id) REFERENCES public.console_dictionary(id);


--
-- TOC entry 3341 (class 2606 OID 16474)
-- Name: videogame fk_videogame_belongs_user; Type: FK CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.videogame
    ADD CONSTRAINT fk_videogame_belongs_user FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- TOC entry 3345 (class 2606 OID 16519)
-- Name: videogame_gender fk_videogame_has_gender; Type: FK CONSTRAINT; Schema: public; Owner: neto
--

ALTER TABLE ONLY public.videogame_gender
    ADD CONSTRAINT fk_videogame_has_gender FOREIGN KEY (videogame_id) REFERENCES public.videogame(id);


-- Completed on 2024-01-20 16:32:07 CST

--
-- PostgreSQL database dump complete
--

