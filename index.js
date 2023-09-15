import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import listEndpoints from 'express-list-endpoints';

const data = [
	{
		"id": 14,
		"user_id": 1,
		"ip_address": "222.342.34.1",
		"checked_in_at": "2022-07-01 09:30:00",
		"checked_out_at": "2022-07-01 10:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 15,
		"user_id": 1,
		"ip_address": "222.343.44.1",
		"checked_in_at": "2022-07-01 10:30:00",
		"checked_out_at": "2022-07-01 11:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 16,
		"user_id": 2,
		"ip_address": "222.342.54.1",
		"checked_in_at": "2022-07-01 14:30:00",
		"checked_out_at": "2022-07-01 16:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 17,
		"user_id": 3,
		"ip_address": "222.343.54.2",
		"checked_in_at": "2022-07-01 08:00:00",
		"checked_out_at": "2022-07-01 09:00:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 18,
		"user_id": 4,
		"ip_address": "222.344.54.3",
		"checked_in_at": "2022-07-02 09:00:00",
		"checked_out_at": "2022-07-02 10:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 19,
		"user_id": 5,
		"ip_address": "222.345.54.4",
		"checked_in_at": "2022-07-02 10:30:00",
		"checked_out_at": "2022-07-02 12:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 20,
		"user_id": 5,
		"ip_address": "222.346.56.5",
		"checked_in_at": "2022-07-02 14:00:00",
		"checked_out_at": "2022-07-02 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 21,
		"user_id": 5,
		"ip_address": "222.346.52.5",
		"checked_in_at": "2022-07-02 14:00:00",
		"checked_out_at": "2022-07-02 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 22,
		"user_id": 6,
		"ip_address": "222.340.54.1",
		"checked_in_at": "2022-07-02 14:00:00",
		"checked_out_at": "2022-07-02 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 23,
		"user_id": 6,
		"ip_address": "222.340.54.2",
		"checked_in_at": "2022-07-02 15:30:00",
		"checked_out_at": "2022-07-02 16:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 24,
		"user_id": 6,
		"ip_address": "222.340.54.1",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 25,
		"user_id": 6,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 26,
		"user_id": 2,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 27,
		"user_id": 6,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 28,
		"user_id": 6,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 29,
		"user_id": 6,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 30,
		"user_id": 6,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 31,
		"user_id": 6,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 32,
		"user_id": 6,
		"ip_address": "192.168.1.100",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 16:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 33,
		"user_id": 7,
		"ip_address": "10.0.0.1",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 34,
		"user_id": 7,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 16:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 35,
		"user_id": 7,
		"ip_address": "10.0.0.1",
		"checked_in_at": "2022-07-04 09:00:00",
		"checked_out_at": "2022-07-04 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 36,
		"user_id": 8,
		"ip_address": "192.168.1.100",
		"checked_in_at": "2022-07-03 10:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 37,
		"user_id": 9,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-03 10:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 38,
		"user_id": 9,
		"ip_address": "10.0.0.1",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 39,
		"user_id": 9,
		"ip_address": "192.168.1.100",
		"checked_in_at": "2022-07-03 11:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 40,
		"user_id": 10,
		"ip_address": "10.0.0.1",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 41,
		"user_id": 11,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 42,
		"user_id": 12,
		"ip_address": "192.168.1.100",
		"checked_in_at": "2022-07-03 08:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 43,
		"user_id": 12,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-03 01:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 44,
		"user_id": 12,
		"ip_address": "222.340.24.1",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 45,
		"user_id": 13,
		"ip_address": "222.340.24.1",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 46,
		"user_id": 13,
		"ip_address": "222.340.24.1",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 47,
		"user_id": 13,
		"ip_address": "172.17.0.5",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 48,
		"user_id": 15,
		"ip_address": "172.17.0.5",
		"checked_in_at": "2022-07-03 11:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 49,
		"user_id": 16,
		"ip_address": "10.0.0.1",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 50,
		"user_id": 16,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-04 14:00:00",
		"checked_out_at": "2022-07-04 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 51,
		"user_id": 16,
		"ip_address": "172.17.0.5",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 16:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 52,
		"user_id": 5,
		"ip_address": "192.168.11.100",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 53,
		"user_id": 7,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-04 15:00:00",
		"checked_out_at": "2022-07-04 15:59:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 54,
		"user_id": 8,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 55,
		"user_id": 9,
		"ip_address": "10.1.1.100",
		"checked_in_at": "2022-07-08 11:00:00",
		"checked_out_at": "2022-07-08 15:00:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 56,
		"user_id": 9,
		"ip_address": "10.1.1.100",
		"checked_in_at": "2022-07-08 15:00:00",
		"checked_out_at": "2022-07-08 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 57,
		"user_id": 44,
		"ip_address": "222.340.64.6",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 58,
		"user_id": 64,
		"ip_address": "222.340.04.6",
		"checked_in_at": "2022-07-03 11:00:00",
		"checked_out_at": "2022-07-03 11:10:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 59,
		"user_id": 64,
		"ip_address": "192.168.1.100",
		"checked_in_at": "2022-07-03 11:10:00",
		"checked_out_at": "2022-07-03 11:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 60,
		"user_id": 62,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 61,
		"user_id": 61,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 62,
		"user_id": 60,
		"ip_address": "192.168.5.100",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 63,
		"user_id": 46,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 64,
		"user_id": 46,
		"ip_address": "192.168.5.100",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 65,
		"user_id": 66,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 66,
		"user_id": 76,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 67,
		"user_id": 86,
		"ip_address": "192.168.1.100",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 68,
		"user_id": 96,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 69,
		"user_id": 16,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 70,
		"user_id": 16,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 71,
		"user_id": 62,
		"ip_address": "10.1.1.100",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 72,
		"user_id": 69,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 73,
		"user_id": 68,
		"ip_address": "10.1.1.100",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 14:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 74,
		"user_id": 61,
		"ip_address": "10.1.1.100",
		"checked_in_at": "2022-07-03 08:00:00",
		"checked_out_at": "2022-07-03 09:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 75,
		"user_id": 61,
		"ip_address": "172.17.0.5",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 76,
		"user_id": 60,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 77,
		"user_id": 62,
		"ip_address": "222.340.24.6",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 78,
		"user_id": 36,
		"ip_address": "192.168.1.100",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 79,
		"user_id": 36,
		"ip_address": "172.17.0.5",
		"checked_in_at": "2022-07-03 08:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 80,
		"user_id": 36,
		"ip_address": "172.17.0.5",
		"checked_in_at": "2022-07-04 14:00:00",
		"checked_out_at": "2022-07-04 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 81,
		"user_id": 36,
		"ip_address": "172.17.0.5",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 82,
		"user_id": 37,
		"ip_address": "192.168.1.100",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 83,
		"user_id": 37,
		"ip_address": "192.168.3.25",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 84,
		"user_id": 37,
		"ip_address": "172.17.0.5",
		"checked_in_at": "2022-07-03 09:00:00",
		"checked_out_at": "2022-07-03 18:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 85,
		"user_id": 38,
		"ip_address": "172.18.0.15",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:10:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 86,
		"user_id": 38,
		"ip_address": "192.168.1.100",
		"checked_in_at": "2022-07-04 14:00:00",
		"checked_out_at": "2022-07-04 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 87,
		"user_id": 38,
		"ip_address": "172.18.0.15",
		"checked_in_at": "2022-07-05 14:00:00",
		"checked_out_at": "2022-07-05 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 88,
		"user_id": 38,
		"ip_address": "172.17.0.5",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 89,
		"user_id": 39,
		"ip_address": "172.17.0.5",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 90,
		"user_id": 39,
		"ip_address": "192.168.1.100",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 91,
		"user_id": 31,
		"ip_address": "192.168.4.75",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 92,
		"user_id": 13,
		"ip_address": "192.168.1.100",
		"checked_in_at": "2022-07-06 16:00:00",
		"checked_out_at": "2022-07-06 16:10:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 93,
		"user_id": 13,
		"ip_address": "192.168.1.100",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 94,
		"user_id": 13,
		"ip_address": "192.168.1.100",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 95,
		"user_id": 13,
		"ip_address": "192.168.1.100",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 96,
		"user_id": 13,
		"ip_address": "192.168.1.100",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	},
	{
		"id": 97,
		"user_id": 13,
		"ip_address": "192.168.4.75",
		"checked_in_at": "2022-07-03 14:00:00",
		"checked_out_at": "2022-07-03 15:30:00",
		"created_at": null,
		"updated_at": null
	}
];

const PORT = 3200;
const corsOptions = {
	origin: (origin, callback) => {
		callback(null, true);
	},
	optionSuccessStatus: 200,
	credentials: true,
	withCredentials: true,
};
const app = express();

app.use(cors(corsOptions));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	console.log({ data });
	res.json({
		data
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
	console.log(listEndpoints(app));
});